import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export const BASE = {
    fontFamily: typography.primaryLight,
    color: colors.white
}

export const BASE_BOLD = {
    fontFamily: typography.primary,
    color: colors.white
}

export const BOLD = {
    fontFamily:typography.primary,
    color: colors.white
}

export const presets = {
    default: typography.primary,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 34,
    },
    small: {
        ...BASE,
        fontSize: 17,
        color:colors.gray
    }
}