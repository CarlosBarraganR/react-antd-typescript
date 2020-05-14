import React, { useEffect } from 'react';
import { TestViewReducer } from './testReducer';
import { TestViewActions } from './testContainer';

type Props = TestViewReducer & TestViewActions;

export const TestView = (props: Props) => {
  const { loading, error, dogUrl, dogsTestApiCall } = props;

  useEffect(() => {
    dogsTestApiCall();
  }, [dogsTestApiCall]);

  return (
    <div>
      <header className="App-header">
        <img src={dogUrl} className="App-logo" alt="logo" />
        <h1 className="title">Welcome to Dog Saga</h1>
      </header>

      {dogUrl ? (
        <p className="intro">Keep clicking for new dogs</p>
      ) : (
        <p className="intro">Replace the React icon with a dog!</p>
      )}

      {loading ? (
        <button type="button" disabled>
          Fetching...
        </button>
      ) : (
        <button type="button" onClick={dogsTestApiCall}>
          Request a Dog
        </button>
      )}

      {error && <p className="errorLabel">Uh oh - something went wrong!</p>}
    </div>
  );
};
