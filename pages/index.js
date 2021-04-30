import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useState } from 'react';

function getSeparator(arrayFormat) {
  switch (arrayFormat) {
    case 'bracket-separator':
    case 'separator':
      return '|';

    default:
      return ',';
  }
}

export default function Home() {
  const [arrayFormat, setArrayFormat] = useState('bracket');
  const router = useRouter();

  const queryStringParsed = queryString.parse(
    typeof window !== 'undefined' ? window.location.search : '',
    { arrayFormat, arrayFormatSeparator: getSeparator(arrayFormat) }
  );

  return (
    <div>
      <div>NextJS Params: {JSON.stringify(router.query)}</div>
      <div>QueryS Params: {JSON.stringify(queryStringParsed)}</div>

      <div className="buttons-list">
        <button
          onClick={() => {
            router.push('?example[]=test1');
            setArrayFormat('bracket');
          }}>
            Single Element Array (Array bracket)
        </button>

        <button
          onClick={() => {
            router.push('?example[]=test1&example[]=test2');
            setArrayFormat('bracket');
          }}>
            Multi Element Array (Array bracket)
        </button>

        <button
          onClick={() => {
            router.push('?example[0]=test1');
            setArrayFormat('index');
          }}>
            Single Element Array (Index)
        </button>

        <button
          onClick={() => {
            router.push('?example[0]=test1&example[1]=test2');
            setArrayFormat('index');
          }}>
            Multi Element Array (Index)
        </button>

        <button
          onClick={() => {
            router.push('?example=test');
            setArrayFormat('comma');
          }}>
            Single Element Array (Comma)
        </button>

        <button
          onClick={() => {
            router.push('?example=test1,test2');
            setArrayFormat('comma');
          }}>
            Multi Element Array (Comma)
        </button>

        <button
          onClick={() => {
            router.push('?example=test');
            setArrayFormat('separator');
          }}>
            Single Element Array (Separator)
        </button>

        <button
          onClick={() => {
            router.push('?example=test1|test2');
            setArrayFormat('separator');
          }}>
            Multi Element Array (Separator)
        </button>

        <button
          onClick={() => {
            router.push('?example=test');
            setArrayFormat('bracket-separator');
          }}>
            Single Element Array (Bracket Separator)
        </button>

        <button
          onClick={() => {
            router.push('?example[]=test1|test2');
            setArrayFormat('bracket-separator');
          }}>
            Multi Element Array (Bracket Separator)
        </button>

        <button
          onClick={() => {
            router.push('?example=test');
            setArrayFormat('none');
          }}>
            Single Element Array (None)
        </button>

        <button
          onClick={() => {
            router.push('?example=test1&example=test2');
            setArrayFormat('none');
          }}>
            Multi Element Array (None)
        </button>
      </div>
    </div>
  );
}
