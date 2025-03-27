import { getRequestConfig } from "next-intl/server";
import { staticData } from "./tolgee";
// import { cookies } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    let language = "en";

    if (locale) {
        language = locale.split("-")[0];
    }

    // Get locale from session
    // const cookieStore = await cookies();
    // const rtyloc = cookieStore.get("rtyloc");
    // console.log({ rtyloc });
    // if (rtyloc?.value) {
    //     language = rtyloc.value.split(".")[0].split("-")[0];
    // } else {
    //     language = "en";
    // }

    return {
        // do this to make next-intl not emit any warnings
        locale: language,
        messages: await staticData,
    };
});
