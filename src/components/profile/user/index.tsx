import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";

const UserForm = function () {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>Name test</p>
        </div>
        <div className={styles.memberTime}>
          <img
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
            className={styles.memberTimeImg}
          />
          <p className={styles.memberTimeText}>
            Member since: <br /> asdasd
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
        <FormGroup>
          <Label for="firstName" className={styles.label}>NAME</Label>
          <Input
            name="firstName"
            type="text"
            id="firstName"
            required
            placeholder="What's your first name?"
            maxLength={20}
            className={styles.inputFlex}
            value={"Name"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName" className={styles.label}>Last Name</Label>
          <Input
            name="lastName"
            type="text"
            id="lastName"
            required
            placeholder="What's your last name?"
            maxLength={20}
            className={styles.inputFlex}
            value={"Test"}
          />
        </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
        <FormGroup>
          <Label for="phone" className={styles.label}>Phone number</Label>
          <Input
            name="phone"
            type="tel"
            id="phone"
            required
            placeholder="(XX) XXXXX-XXXX"
            className={styles.input}
            value={"+55 (99) 99999-9999"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email" className={styles.label}>E-mail</Label>
          <Input
            name="email"
            type="email"
            id="email"
            required
            placeholder="What's your e-mail?"
            className={styles.input}
            value={"asda@test.com"}
          />
        </FormGroup>
        <Button className={styles.formBtn} outline type="submit">Save</Button>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
