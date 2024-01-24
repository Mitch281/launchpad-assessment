export function getQSParamFromURL(
    key: string,
    url: string | undefined
): string | null {
    if (!url) return "";
    const search = new URL(url).search;
    const urlParams = new URLSearchParams(search);
    console.log("*************************");
    console.log(urlParams);
    console.log("*************************");

    return urlParams.get(key);
}
