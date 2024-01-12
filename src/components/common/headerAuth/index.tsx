import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const HeaderAuth = function () {
    const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();

    router.push("/")
  }
  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home">
          <img
            src="/logoOnebitflix.svg"
            alt="logoOnebitflix"
            className={styles.imgLogoNav}
          />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input
              name="search"
              type="search"
              placeholder="Search"
              className={styles.input}
            />
          </Form>
          <img
            src="/homeAuth/iconSearch.svg"
            alt="SearchHeader"
            className={styles.searchImg}
          />
          <p className={styles.userProfile} onClick={handleOpenModal}>
            AB
          </p>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
            <Link href="/profile">
                <p className={styles.modalLink}>My configurations</p>
            </Link>
            <p className={styles.modalLink} onClick={handleLogout}>Exit</p>
        </Modal>
      </Container>
    </>
  );
};

export default HeaderAuth;
