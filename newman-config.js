const newman = require('newman'); // require Newman in your project

const options = {
    collection: require('./sample-collection.json'),
    reporters: 'cli',
    environment: {
        values: [
            { key: "deck_id", value: process.env.DECK_ID, enabled: true },
            { key: "count", value: process.env.COUNT, enabled: true },
            { key: "url", value: process.env.url, enabled: true }
        ]
    }
};

newman.run(options, (err, summary) => {
    // console.log environment values
    console.log(`Environments: ${JSON.stringify(options.environment.values, null, 2)}`);

    if (err) {
      console.error(err);
    } else {
      console.log('Execução concluída com sucesso!');
    }
  });
