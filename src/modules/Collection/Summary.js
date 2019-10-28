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

const lagFacts = (decks) => {
  var liste = [];
  var cards = decks.reduce((n, x) => {
    return n.concat(x.cards);
  }, []);

  var popName = histo(cards, x => x.set);
  var i = 1;
  for (var item in popName.slice(0, 5)) {
    liste.push({ title: "Most popular set #" + i++, text: popName[item][0] + ', ' + popName[item][1] + ' cards' });
  }

  liste.push({});

  popName = histo(cards, x => x.name);
  i = 1;
  for (var item in popName.slice(0, 20)) {
    liste.push({ title: "Most popular card #" + i++, text: popName[item][0] + ', ' + popName[item][1] + ' times' });
  }

  return liste;
};

const histo = (list, callback) => {
  var dict = list.reduce((n, x) => {
    var key = callback(x);
    if (key !== undefined) {
      n[key] = x.count + (n[key] ? n[key] : 0);
    }
    return n;
  }, {});

  var items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });
  
  // Sort the array based on the second element
  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  return items;
}

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

const Facts = ({ decks }) => {
  var list = lagFacts(decks);
  return <ul>{Object.entries(list).map( ([i, item]) => {
    if (!item.title) return <li>&nbsp;</li>;
    return (     
        <li key={i}><b>{item.title}:</b> {item.text}</li>
    );
  })}</ul>;
}

export const Summary = ({ decks }) => {
  return (
    <>
    <section>
      <h2>Collection summary</h2>
      <div className="tiles">
        <Liste decks={decks} />
      </div>
      <br />
      <Facts decks={decks} />
    </section>
    </>
  );
}

export default Summary;