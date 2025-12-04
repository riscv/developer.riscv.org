import React, {type ReactNode} from 'react';
import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): ReactNode {
  return (
    <>
      <SearchBar {...props} />
      <div className="searchbar">
        <input placeholder="Search" onClick={() => window.Kapa.open({'mode':'search'})}></input>
        <button onClick={() => window.Kapa.open()}>AI Search</button>
      </div>

    </>
  );
}
