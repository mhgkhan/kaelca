export async function checkExists(model, query) {
    let obj = {};

    try {
        const exists = await model.findOne(query);
        if (!exists || exists == "undefiend") {
            obj.exists = false;
            obj.error = "Not found";
            obj.isErr = false;
        }
        else {
            obj.exists = true;
            obj.data = exists;
            obj.isErr = false;
        }
    } catch (error) {
        obj.error = error.message;
        obj.exists = false;
        obj.isErr = true;
    } finally {
        const result = Object.freeze(obj);
        return result;
    }
}


