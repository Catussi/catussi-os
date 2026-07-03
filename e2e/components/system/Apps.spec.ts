import { expect, test } from "@playwright/test";
import {
  DRAG_HEADLESS_NOT_SUPPORTED_BROWSERS,
  TEST_APP_CONTAINER_TITLE,
  WINDOW_TITLEBAR_SELECTOR,
} from "e2e/constants";
import {
  captureConsoleLogs,
  desktopEntriesAreVisible,
  disableWallpaper,
  dragFirstDesktopEntryToWindow,
  loadContainerTestApp,
  windowTitlebarTextIsVisible,
  windowsAreVisible,
} from "e2e/functions";

test.beforeEach(captureConsoleLogs());
test.beforeEach(disableWallpaper);

test.describe("app container", () => {
  test.beforeEach(loadContainerTestApp);
  test.beforeEach(windowsAreVisible);

  test("can drop", async ({ browserName, headless, page }) => {
    test.skip(
      headless && DRAG_HEADLESS_NOT_SUPPORTED_BROWSERS.has(browserName),
      "no headless drag support"
    );

    await windowTitlebarTextIsVisible(TEST_APP_CONTAINER_TITLE, { page });

    await desktopEntriesAreVisible({ page });
    await dragFirstDesktopEntryToWindow({ page });

    await expect(() =>
      expect(page.locator(WINDOW_TITLEBAR_SELECTOR)).toHaveText(
        /.+ - Documento$/,
        { timeout: 5000 }
      )
    ).toPass();
  });
});
