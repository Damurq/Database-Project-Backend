module.exports = (app) => {

    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to our Database Project (2021).',
    }));

    // Routes of Web Service
    app.use('/document', require('./document'));
    app.use('/customer', require('./customer'));
    app.use('/account', require('./account'));
    app.use('/complement', require('./complement'));
    app.use('/foreignUse', require('./foreignUse'));
    app.use('/municipality', require('./municipality'));
    app.use('/office', require('./office'));
    app.use('/request', require('./request'));
    app.use('/state', require('./state'));
    app.use('/voucher', require('./voucher'));

};