import express from "express"; // "type": "module"
import { client } from "../index.js"
import { auth } from "../middleware/auth.js";

const router = express.Router()

router.post("/dashboard", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("dashboard")
        .insertOne(result)
    response.send(data)
})

router.get("/dashboard", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("dashboard")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/dashboard/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("dashboard")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


router.post("/cars", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("cars")
        .insertOne(result)
    response.send(data)
})

router.get("/cars", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("cars")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/cars/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("cars")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


router.post("/bikes", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("bikes")
        .insertOne(result)
    response.send(data)
})

router.get("/bikes", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("bikes")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/bikes/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("bikes")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/phones", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("phones")
        .insertOne(result)
    response.send(data)
})

router.get("/phones", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("phones")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/phones/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("phones")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/watches", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("watches")
        .insertOne(result)
    response.send(data)
})

router.get("/watches", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("watches")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/watches/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("watches")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/washingMachines", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("washingMachines")
        .insertOne(result)
    response.send(data)
})

router.get("/washingMachines", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("washingMachines")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/washingMachines/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("washingMachines")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/laptops", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("laptops")
        .insertOne(result)
    response.send(data)
})

router.get("/laptops", async function (request, response) {
    const detail = await client
        .db("Olx")
        .collection("laptops")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/laptops/:id", auth, async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("Olx")
        .collection("laptops")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/chat", async function (request, response) {
    const result = request.body
    const data = await client
        .db("Olx")
        .collection("chat")
        .insertOne(result)
    response.send(data)
})

// router.get("/chat", async function (request, response) {
//     const detail = await client
//         .db("Olx")
//         .collection("chat")
//         .find({})
//         .toArray();
//     response.send(detail)
// })

export default router
