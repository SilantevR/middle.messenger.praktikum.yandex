interface validationResult {
    required: string;
    text: string;
}
export default function validation(name: string, value: string): validationResult;
export {};
