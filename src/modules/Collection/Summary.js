import React from 'react';

const lagStats = (decks) => {
  var liste = [];
  var cards = decks.reduce((n, x) => {
    return n.concat(x.cards);
  }, []);

  var cardCount = sum(cards, x => x.count);
  var foilCount = sum(cards, x => (x.foil && !x.proxy ? 1 : 0) * x.count);

  liste.push({ title: "Decks", icon: "thumbs-up", text: decks.length });
  liste.push({ title: "Cards", icon: "smile", text: cardCount });
  liste.push({ title: "Proxies", icon: "thumbs-down", text: sum(cards, x => (x.proxy ? 1 : 0) * x.count) });
  liste.push({ title: "Value", icon: "frown", text: Math.round(sum(cards, x => x.proxy ? 0 : x.price * x.count)) + '$' });
  liste.push({ title: "Proxy value", icon: "frown", text: Math.round(sum(cards, x => x.proxy ? x.price * x.count : 0)) + '$' });
  liste.push({ title: "Unique cards", icon: "meh", text: set(cards, x => x.name).length });
  liste.push({ title: "Foils", icon: "thumbs-up", text: foilCount });
  liste.push({ title: "Foil price", icon: "thumbs-up", text: Math.round(sum(cards, x => !x.proxy && x.foil ? x.price : 0)) + '$' });
  liste.push({ title: "Foiled", icon: "thumbs-up", text: Math.round(100.0 * foilCount / cardCount) + '%' });

  return liste;
};

const set = (list, callback) => Array.from(list.reduce((n, x) => {
  n.add(callback(x));
  return n;
}, new Set()));

const sum = (list, callback) => list.reduce((n, x) => {
  var val = callback(x);
  return n + (val ? parseFloat(val) : 0);
}, 0);

const Liste = ({ decks }) => {
  var list = lagStats(decks);
  return Object.entries(list).map( ([i, item]) => {
    return (
      <div key={i} className='tile'>
        <div className='container'>
          <div className='art'>
            <span className={"icon-" + item.icon + " large"}></span>
          </div>
          <span className='title'>{item.title}: {item.text}</span>
        </div>
      </div>
    );
  });
}

export const Summary = ({ decks }) => {
  return (
    <>
    <section>
      <h2>Collection summary</h2>
      <div className="tiles">
        <Liste decks={decks} />
      </div>
    </section>
    </>
  );
}

export default Summary;