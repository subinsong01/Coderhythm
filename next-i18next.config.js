const nextI18NextConfig = {
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en", "ja"],
    localeDetection: true,
  },
  ns: ["common"],
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
};

export default nextI18NextConfig;
