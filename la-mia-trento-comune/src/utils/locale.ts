function getComponentClosestLanguage(/*element: HTMLElement,*/language:string): string {
    // let closestElement = element.closest("[lang]") as HTMLElement;
    // return closestElement ? closestElement.lang : "en";
    return language ? language : "it";
  }
  function fetchLocaleStringsForComponent(
    componentName: string,
    locale: string
  ): Promise<any> {
    return new Promise(
      (resolve, reject): void => {
        fetch(`"./assets/wcs-comune/i18n/${componentName}.i18n.${locale}.json`).then(
          result => {
            if (result.ok) resolve(result.json());
            else reject();
          },
          () => reject()
        );
      }
    );
  }
  export async function getLocaleComponentStrings(
    element: HTMLElement, language:string
  ): Promise<any> {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage(language);
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
  