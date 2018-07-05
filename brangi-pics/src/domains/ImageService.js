export default 

class ImageService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    show() {
        return this._resource
            .query()
            .then(res => res.json());
    }

    save(image) {
        if (image._id) {
            return this._resource.update({ id: image._id }, image);
        } else {
            return this._resource.save(image);
        }
    }

    delete(id) {
        return this._resource.delete({ id });
    }

    find(id) {
        return this._resource
            .get({ id })
            .then(res => res.json());
    }

}