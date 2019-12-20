function getComponentClosestLanguage(element: HTMLElement/*,language:string*/): string {
    let closestElement = element.closest("[lang]") as HTMLElement;
    return closestElement ? closestElement.lang : "it";
    // return language ? language : "it";
  }
  function fetchLocaleStringsForComponent(
    componentName: string,
    locale: string
  ): Promise<any> {
    console.log("ciao");

    return new Promise(
      (resolve, reject): void => {
        fetch(`./i18n/${componentName}.i18n.${locale}.json`).then(
          result => {
            // console.log(result.ok);
            if (result.ok) {
              resolve(result.json())
              // console.log(result.json());
            } else reject();
          },
          () => reject()
        );
      }
    );
  }
  export async function getLocaleComponentStrings(
    element: HTMLElement/*, language:string*/
  ): Promise<any> {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage(element);
    let strings;
    try {
      strings = await fetchLocaleStringsForComponent(
        componentName,
        componentLanguage
      );
    } catch (e) {
      console.warn(
        `no locale for ${componentName} (${componentLanguage}) loading default locale en.`
      );
      strings = await fetchLocaleStringsForComponent(componentName, "en");
    }
    return strings;
  }
  