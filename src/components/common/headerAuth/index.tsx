import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileService from "@/services/profileService";

Modal.setAppElement("#__next");

const HeaderAuth = function () {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    ProfileService.fetchCurrent().then((user => {
      const firstNameInitial = user.fisrtName.slice(0,1);
      const lastNameInitial = user.lastName.slice(0,1);
      setInitials(firstNameInitial+lastNameInitial);
    }))
  },[])

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();

    router.push("/");
  };
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
            {initials}
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
          <p className={styles.modalLink} onClick={handleLogout}>
            Exit
          </p>
        </Modal>
      </Container>
    </>
  );
};

export default HeaderAuth;
