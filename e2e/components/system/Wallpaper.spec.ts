import { test } from "@playwright/test";
import {
  backgroundCanvasMaybeIsVisible,
  backgroundIsUrl,
  canvasBackgroundIsHidden,
  captureConsoleLogs,
  clickContextMenuEntry,
  clickDesktop,
  clickFileExplorerEntry,
  contextMenuIsVisible,
  desktopIsVisible,
  disableWallpaper,
  fileExplorerEntriesAreVisible,
  loadApp,
  loadAppWithCanvas,
  mockPictureSlideshowRequest,
  sessionIsWriteable,
  windowsAreVisible,
} from "e2e/functions";

test.beforeEach(captureConsoleLogs());

test("has background", loadAppWithCanvas);

test("can change background", async ({ headless, browserName, page }) => {
  await disableWallpaper({ page });
  await loadAppWithCanvas({ browserName, headless, page });
  await sessionIsWriteable({ page });

  const pictureSlideshowResponse = await mockPictureSlideshowRequest({ page });

  await clickDesktop({ page }, true);
  await contextMenuIsVisible({ page });
  await clickContextMenuEntry(/^Fondo$/, { page });
  await clickContextMenuEntry(/^Presentación de imágenes$/, { page });

  await pictureSlideshowResponse();

  await canvasBackgroundIsHidden({ page });
  await backgroundIsUrl({ page });

  await page.reload();

  await desktopIsVisible({ page });
  await canvasBackgroundIsHidden({ page });
  await backgroundIsUrl({ page });
});

test.describe("can set background", () => {
  test.beforeEach(disableWallpaper);
  test.beforeEach(async ({ page }) =>
    loadApp({ url: "/System/Icons/48x48" })({ page })
  );
  test.beforeEach(windowsAreVisible);
  test.beforeEach(fileExplorerEntriesAreVisible);
  test.beforeEach(backgroundCanvasMaybeIsVisible);

  test("via image", async ({ headless, browserName, page }) => {
    await backgroundCanvasMaybeIsVisible({ browserName, headless, page });

    await clickFileExplorerEntry("audio.png", { page }, true);
    await contextMenuIsVisible({ page });

    await clickContextMenuEntry(/^Establecer como fondo$/, { page });
    await sessionIsWriteable({ page });
    await clickContextMenuEntry(/^Mosaico$/, { page });

    await backgroundIsUrl({ page });
    await canvasBackgroundIsHidden({ page });
  });
});
