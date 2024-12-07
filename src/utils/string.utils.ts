
import countryList from "react-select-country-list";

export const remove_white_space = (str: string) => {
  return (str ?? "").trim().replace(/[" "]/gi, "");
};



export default function getCountry(code?: string) {
  try {
    if (!code) {
      return "_ _";
    }
    return countryList().getLabel(code);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return "_ _";
  }
}

export function stringToNumber(str: string | number) {
  // Remplacer les virgules par des points pour le cas de décimales
  const sanitizedStr = remove_white_space(`${str}`).replace(/,/g, ".");
  // Convertir en nombre
  return isNaN(Number(sanitizedStr)) ? 0 : parseFloat(sanitizedStr);
}

export function capitalizeFirstLetter(value: string) {
  return value?.charAt(0)?.toUpperCase() + value?.slice(1);
}

export function formatNumberN(val: string, sep = " "): string {
  const str = Number(val) < 0 ? -1 * Number(val) + "" : val;
  if (!str || parseFloat(str) === 0 || str?.length === 0 || str === "") {
    return str;
  }

  const local_string = str + "".trim().replace(/[" "]/gi, "");

  if (parseFloat(local_string) >= 0) {
    if (local_string.split(".").length > 1) {
      const words = local_string.split(".");
      return words[0] + "," + words[1].slice(0, 2);
    }

    if (local_string?.length <= 3) {
      return local_string;
    }
    return local_string
      ? `${formatNumberN(
          local_string.slice(0, -3),
          sep ?? "."
        )}${sep}${local_string.slice(local_string.length - 3)}`
      : "0";
  } else {
    return "-" + formatNumberN(local_string.slice(1));
  }
}

export function formatNumber(val: string | number) {
  if (Number(val) < 0) {
    return "-" + formatNumberN(`${val}`);
  }
  return formatNumberN(`${val}`);
}
