import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";

const PasswordForm = function () {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label for="currentPassword" className={styles.label}>Current Password</Label>
            <Input
              name="currentPassword"
              type="password"
              id="currentPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              className={styles.input}
            />
          </FormGroup>
        </div>
        <div className={styles.inputFlexDiv}>
        <FormGroup>
            <Label for="newPassword" className={styles.label}>New Password</Label>
            <Input
              name="newPassword"
              type="password"
              id="newPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword" className={styles.label}>Confirm New Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="********"
              required
              minLength={6}
              maxLength={12}
              className={styles.inputFlex}
            />
          </FormGroup>
        </div>
          <Button className={styles.formBtn} outline>
            Save
          </Button>
      </Form>
    </>
  );
};

export default PasswordForm;
