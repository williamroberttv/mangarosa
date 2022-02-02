const knowledgesLengthError = "O campo deve conter no máximo 3 conhecimentos.";
const knowledgesIncorrectValueError =
  "Valor incorreto para o campo de conhecimentos.";

const listOfKnowledges = [
  "react",
  "devops",
  "banco de dados",
  "typescript",
  "nodejs",
];

export function handleKnowledgesValidation(
  knowledges: string[]
): string | null {
  const formatedKnowledges = knowledges.map((item) => item.toLowerCase());
  for (let i = 0; i < knowledges.length; i++) {
    const item = listOfKnowledges.includes(formatedKnowledges[i]);
    if (!item) {
      return knowledgesIncorrectValueError;
    }
  }

  if (knowledges.length > 3) {
    return knowledgesLengthError;
  }
  return null;
}
