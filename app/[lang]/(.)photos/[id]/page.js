const { default: Modal } = require("@/components/Modal");
const { default: PhotoDetails } = require("@/components/PhotoDetails");

const PhotoModal = ({ params: { id, lang } }) => {
  <Modal>
    <PhotoDetails id={id} lang={lang} />
  </Modal>;
};

export default PhotoModal;
