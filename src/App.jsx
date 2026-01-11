import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

  let SORT_BY_ALFABETI = 'alphabetically';
  let SORT_BY_LENGTH = 'length';
  let SORT_BY_REVERSE = 'Reverse';

function getGoods (sortField, [...goodsFromServer]){
    let goods = [...goodsFromServer];

    const visibleGoods = goods.toSorted((good1, good2) => {
      switch (sortField) {
        case SORT_BY_ALFABETI:
          return good1.localeCompare(good2);
        case SORT_BY_LENGTH :
          return good1.length - good2.length;
        default : return 0;
      }
    })
    sortField === SORT_BY_REVERSE?visibleGoods.reverse():'';
    return visibleGoods;
  }

export const App = () => {
  const [sortField, setSortField] = useState('');
  const videlGoods = getGoods(sortField, [...goodsFromServer]);
  return (

  <div className="section content">
    <div className="buttons">
      <button onClick={() => setSortField(SORT_BY_ALFABETI)} type="button" className={`button is-info ${sortField === SORT_BY_ALFABETI? '' : 'is-light'}`}>
        Sort alphabetically
      </button>

      <button onClick={() => setSortField(SORT_BY_LENGTH)} type="button" className={`button is-success ${sortField === SORT_BY_LENGTH ? '' : 'is-light'}`}>
        Sort by length
      </button>

      <button onClick={() =>  setSortField(SORT_BY_REVERSE)} type="button" className={`button is-warning ${sortField === SORT_BY_REVERSE?'':'is-light'}`}>
        Reverse
      </button>

      <button onClick={() =>setSortField("")} type="button" className="button is-danger is-light">
        Reset
      </button>
    </div>

    <ul>
      <li data-cy="Good">Dumplings</li>
      <li data-cy="Good">Carrot</li>
      <li data-cy="Good">Eggs</li>
      <li data-cy="Good">Ice cream</li>
      <li data-cy="Good">Apple</li>
      <li data-cy="Good">...</li>
    </ul>
  </div>)
};
