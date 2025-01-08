'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Description, Field, Select, Textarea } from '@headlessui/react';
import CodeBlock from '@/components/codeblock';

interface SelectorProps {
  values: string[][];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const languageValues = [
  ['javascript', 'JavaScript'],
  ['text', 'Plain Text'],
  ['cpp', 'C++'],
  ['java', 'Java'],
  ['python', 'Python'],
  ['json', 'JSON'],
  ['markdown', 'Markdown'],
];
const themeValues = [
  ['everforest-dark', 'Everforest Dark'],
  ['dracula', 'Dracula'],
  ['github-dark', 'GitHub Dark'],
  ['github-light', 'GitHub Light'],
  ['kanagawa-wave', 'Kanagawa Wave'],
  ['tokyo-night', 'Tokyo Night'],
  ['plastic', 'Plastic'],
];

const Selector = ({ values, setSelected }: SelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <Field>
      <div className="relative">
        <Select
          onChange={handleChange}
          className="mt-3 rounded-lg border-none py-1.5 px-3 text-sm/6 bg-gray-200 dark:bg-gray-800"
        >
          {values.map(([val, title]) => (
            <option key={val} value={val}>
              {title}
            </option>
          ))}
        </Select>
      </div>
    </Field>
  );
};

export default function CodeBlockNode() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [lang, setLang] = useState<string>(languageValues[0][0]);
  const [theme, setTheme] = useState<string>(themeValues[0][0]);
  const [code, setCode] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="px-4">
      <Field>
        <Description className="text-sm/6 text-black/50 dark:text-white/50">Language / Theme</Description>
        <div className="flex gap-x-2">
          <Selector values={languageValues} setSelected={setLang} />
          <Selector values={themeValues} setSelected={setTheme} />
        </div>
        <Description className="mt-12 text-sm/6 text-black/50 dark:text-white/50">
          Feel free to write anything in the code block
        </Description>
        <Textarea
          ref={textareaRef}
          className="mt-3 w-[74ch] rounded-lg border-none bg-black/5 dark:bg-white/5 py-1.5 px-3 text-sm/6
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          value={code}
          onChange={handleChange}
          placeholder="Enter your code here"
          spellCheck={false}
        />
      </Field>
      <div className="mt-5 prose">
        <CodeBlock lang={lang} code={`//code block\n${code}`} theme={theme} />
      </div>
    </div>
  );
}
