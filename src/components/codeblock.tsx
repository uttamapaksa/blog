import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

interface CodeBlockProps {
  lang?: string;
  code?: string;
  theme?: string;
}

const codeString = (lang: string, cont: string) => `
\`\`\`${lang}
${cont}
\`\`\`
`;

export default function CodeBlock({ lang = 'text', code = '', theme = 'everforest-dark' }: CodeBlockProps) {
  const [result, setResult] = useState<string | ReactElement<any, string | JSXElementConstructor<any>>>('');

  useEffect(() => {
    (async () => {
      const { content } = await compileMDX({
        source: codeString(lang, code),
        options: {
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, { theme }]],
            format: 'mdx',
          },
        },
      });
      setResult(content);
    })();
  }, [lang, code, theme]);

  return result;
}
