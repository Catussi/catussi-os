import { useSession } from "contexts/session";
import { getUi, type UiDictionary } from "utils/i18n";

const useUi = (): UiDictionary => {
  const { locale } = useSession();

  return getUi(locale);
};

export default useUi;
