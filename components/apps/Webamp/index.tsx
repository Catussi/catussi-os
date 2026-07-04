import { basename, extname } from "path";
import { type Options } from "webamp";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import StyledWebamp from "components/apps/Webamp/StyledWebamp";
import {
  cleanBufferOnSkinLoad,
  DEFAULT_WEBAMP_PLAYLIST,
  DEFAULT_WEBAMP_SKIN,
  DEFAULT_WEBAMP_PLAYLIST_VOLUME,
  focusWindow,
  parseTrack,
  setWebampVolume,
  tracksFromPlaylist,
  unFocus,
} from "components/apps/Webamp/functions";
import useWebamp from "components/apps/Webamp/useWebamp";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useFocusable from "components/system/Window/useFocusable";
import useWindowTransitions from "components/system/Window/useWindowTransitions";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { AUDIO_PLAYLIST_EXTENSIONS } from "utils/constants";
import { bufferToUrl, getExtension, loadFiles } from "utils/functions";

const Webamp: FC<ComponentProcessProps> = ({ id }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { readFile } = useFileSystem();
  const {
    processes: { [id]: { libs = [], minimized = false, url = "" } = {} } = {},
    url: setUrl,
  } = useProcesses();
  const [loadedUrl, setLoadedUrl] = useState(url);
  const { initWebamp, webampCI } = useWebamp(id);
  const windowTransitions = useWindowTransitions(id, true);
  const focusEvents = useMemo(
    () => ({
      onBlurCapture: () => webampCI && unFocus(webampCI),
      onFocusCapture: () => webampCI && focusWindow(webampCI, "main"),
    }),
    [webampCI]
  );
  const { zIndex, ...focusableProps } = useFocusable(id, focusEvents);
  const getUrlOptions = useCallback(async (): Promise<Options> => {
    const options: Options = {};
    const targetUrl = url || DEFAULT_WEBAMP_PLAYLIST;

    if (targetUrl) {
      const extension = getExtension(targetUrl);

      if (AUDIO_PLAYLIST_EXTENSIONS.has(extension)) {
        try {
          const initialTracks = await tracksFromPlaylist(
            (await readFile(targetUrl)).toString(),
            extension,
            basename(targetUrl, extname(targetUrl))
          );

          if (initialTracks.length > 0) {
            options.initialTracks = initialTracks;
          }
        } catch {
          // playlist aún no generada o sin pistas
        }
      } else if (extension === ".mp3") {
        options.initialTracks = [
          await parseTrack(await readFile(targetUrl), basename(targetUrl)),
        ];
      } else if (extension === ".wsz") {
        options.initialSkin = {
          url: bufferToUrl(await readFile(targetUrl)),
        };
      }
    }

    if (!options.initialSkin && getExtension(url) !== ".wsz") {
      try {
        options.initialSkin = {
          url: bufferToUrl(await readFile(DEFAULT_WEBAMP_SKIN)),
        };
      } catch {
        // skin aún no descargada
      }
    }

    return options;
  }, [readFile, url]);
  const loadWebampUrl = useCallback(async () => {
    if (webampCI) {
      const { initialTracks, initialSkin } = await getUrlOptions();

      if (initialTracks) {
        webampCI.setTracksToPlay(initialTracks);
        setWebampVolume(webampCI, DEFAULT_WEBAMP_PLAYLIST_VOLUME);
      } else if (initialSkin) {
        cleanBufferOnSkinLoad(webampCI, initialSkin.url);
        webampCI.setSkinFromUrl(initialSkin.url);
      }
    }
  }, [getUrlOptions, webampCI]);
  const loadingWebamp = useRef(false);

  useEffect(() => {
    if (containerRef.current && !webampCI) {
      loadFiles(libs).then(async () => {
        if (window.Webamp && !loadingWebamp.current) {
          loadingWebamp.current = true;

          initWebamp(
            containerRef.current as HTMLDivElement,
            await getUrlOptions()
          );
        }
      });
    }
  }, [getUrlOptions, initWebamp, libs, webampCI]);

  useEffect(() => {
    if (url !== loadedUrl) {
      loadWebampUrl();
      setLoadedUrl(url);
    } else if (url) {
      setUrl(id, "");
      setLoadedUrl("");
    }
  }, [id, loadWebampUrl, loadedUrl, setUrl, url]);

  return (
    <StyledWebamp
      ref={containerRef}
      $minimized={minimized}
      $zIndex={zIndex}
      {...focusableProps}
      {...windowTransitions}
    />
  );
};

export default memo(Webamp);
