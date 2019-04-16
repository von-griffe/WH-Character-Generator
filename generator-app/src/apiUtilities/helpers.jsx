export function getStepContent(step, value1, value2, value3, value4) {
    switch (step) {
        case 0:
            return value1;
        case 1:
            return value2;
        case 2:
            return value3;
        case 3:
            return value4;

        default:
            return 'Unknown step';
    }
}