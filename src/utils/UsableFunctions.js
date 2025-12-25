export const submitForm = async (path, method, headers, data) => {
    console.log(path, method, headers, data)
    let obj = {};
    try {
        const call = await fetch(path, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        });

        const response = await call.json();
        if (response.success) {
            obj.success = true;
            obj.message = response.message;
            obj.data = response.data;
        }
        else {
            obj.success = false;
            obj.message = response.message;
        }


    } catch (error) {
        obj.success = false;
        obj.message = error.message;
    } finally {
        const data = Object.freeze(obj);
        return data;
    }
}