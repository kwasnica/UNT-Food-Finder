DROP TABLE IF EXISTS tbl_restaurants;
CREATE TABLE tbl_restaurants(
	fld_res_id_pk INT AUTO_INCREMENT,
	fld_res_name TEXT,
	fld_res_oncampus BOOLEAN,
	fld_res_vegan BOOLEAN,
	fld_res_vegetarian BOOLEAN,
	fld_res_gf BOOLEAN,
	fld_res_discount BOOLEAN,
	CONSTRAINT res_pk PRIMARY KEY (fld_res_id_pk)
);

DROP PROCEDURE IF EXISTS proc_insert_restaurant;
DELIMITER $$

CREATE PROCEDURE proc_insert_restaurant(IN parm_name VARCHAR(255),
                                        IN parm_oncampus BOOLEAN,
										IN parm_vegan BOOLEAN,
										IN parm_vegetarian BOOLEAN,
										IN parm_gf BOOLEAN,
										IN parm_discount BOOLEAN
)
BEGIN
	
	INSERT INTO tbl_restaurants(fld_res_name,
								fld_res_oncampus,
								fld_res_vegan,
								fld_res_vegetarian,
								fld_res_gf,
								fld_res_discount)
					VALUES(parm_name, parm_oncampus, parm_vegan, parm_vegetarian, parm_gf, parm_discount);
END $$

DELIMITER ;
