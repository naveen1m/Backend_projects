import express from 'express'
import data from './data.js'

const app = express();
const port = process.env.PORT || '3000'

// endpoint for pagination  http://localhost:3000/api?pageNumber=1&pageSize=5
app.get('/api', (req, res) => {
    // res.json(data[0])
    const pageNumber = parseInt(req.query.pageNumber);
    const pageSize = parseInt(req.query.pageSize);
    // console.log(pageNumber, pageSize)

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    console.log('start', startIndex, "end", endIndex, typeof endIndex)
    const results = data.slice(startIndex, endIndex);
    const response = {
        data: results,
        totalCount: results.length
    }

    res.json(response)
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})