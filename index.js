
const form = document.getElementById('grade-form');
const btn = document.getElementById('calc-btn');

function parseGrade(value) {
    // trim and parse as float , return NaN if invalid
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : NaN;
}

function getGradeValue(gpa) {
    if (gpa >= 80 && gpa <= 100) return "A+";
    if (gpa >= 60 && gpa <= 79) return "B+";
    if (gpa >= 50 && gpa <= 59) return "C+";
    if (gpa >= 40 && gpa <= 49) return "D+";
    if (gpa >= 30 && gpa <= 39) return "E+";
    return "F"
}

btn.addEventListener('click', () => {
    const grade1 = parseGrade(document.getElementById("grade-math").value);
    const grade2 = parseGrade(document.getElementById("grade-english").value);
    const grade3 = parseGrade(document.getElementById("grade-chemistry").value);
    const grade4 = parseGrade(document.getElementById("grade-further-math").value);

    if ([grade1, grade2, grade3, grade4].some(Number.isNaN)) {
        console.log("Please enter valid numeric scores for all fields.");
        return;
    }

    const sum = grade1 + grade2 + grade3 + grade4;
    const gpa = sum / 4;

    console.log("Scores:", grade1, grade2, grade3, grade4, "Average:", gpa.toFixed(2));
    console.log("Your GPA is", getGradeValue(gpa));

}
);
