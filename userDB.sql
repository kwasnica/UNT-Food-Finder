DROP TABLE IF EXISTS tbl_users;
CREATE TABLE tbl_users(
  fld_u_id_pk INT AUTO_INCREMENT,
  fld_u_firstname TEXT,
  fld_u_lastname TEXT,
  fld_u_email TEXT,
  fld_u_pswd TEXT,
  CONSTRAINT res_pk PRIMARY KEY (fld_u_id_pk)
);
DROP PROCEDURE IF EXISTS proc_insert_user;
DELIMITER $$ CREATE PROCEDURE proc_insert_user(
  IN parm_firstname VARCHAR(255),
  IN parm_lastname VARCHAR(255),
  IN parm_email VARCHAR(255),
  IN parm_pswd VARCHAR(255)
) BEGIN
INSERT INTO tbl_users(
    fld_u_firstname,
    fld_u_lastname,
    fld_u_email,
    fld_u_pswd
  )
VALUES(
    parm_firstname,
    parm_lastname,
    parm_email,
    parm_pswd
  );
END $$ DELIMITER;
CALL proc_insert_user('test', 'test', 'test', 'test');
