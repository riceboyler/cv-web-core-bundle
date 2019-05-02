import { palette } from "../utility/variables"

export const grades = ["low", "medium", "high"]

export const gradeColor = grade => {
    if (grade === "low") return palette.chanceIndicatorLow
    if (grade === "high") return palette.chanceIndicatorHigh
    return palette.chanceIndicatorMedium
}
