import { existsSync, writeFile } from 'node:fs';

const status = async (parameters: Parameters) => {
  const { file, isUpdate } = parameters;

  if (existsSync(file) && isUpdate) {
    return 'Update';
  }

  return (await writeFile(file)) && 'Added';
};

export { status };
