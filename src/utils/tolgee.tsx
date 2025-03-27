import {
    DevTools,
    FinalFormatterMiddleware,
    Tolgee,
    TolgeePlugin,
} from "@tolgee/web";

export const staticData = {
    en: () => import("@/locales/en.json"),
};

function rtyFormatter(): FinalFormatterMiddleware {
    return {
        format: ({ translation, params }) =>
            translation.replace(
                /%(.*?)%/g,
                (_, key) => params?.[key.trim()] ?? ""
            ),
    };
}

const FormatRTY = (): TolgeePlugin => (tolgee, tools) => {
    tools.setFinalFormatter(rtyFormatter());
    return tolgee;
};

export function TolgeeBase() {
    return Tolgee().use(FormatRTY()).use(DevTools()).updateDefaults({
        fallbackLanguage: "en",
        staticData,
    });
}
