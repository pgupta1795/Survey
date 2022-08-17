mongo -- "$MONGO_INITDB_DATABASE" <<-EOF
    const rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    const rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
	const database = '$MONGO_INITDB_DATABASE';
    const admin = db.getSiblingDB(database);
    admin.auth(rootUser, rootPassword);

    const user = '$MONGO_USER';
    const passwd = '$MONGO_PASSWORD';
    db.createUser({user: user, pwd: passwd, roles: [
		{
			role: "dbOwner",
			db: database
		},
		{ 
			role: "readAnyDatabase",
			db: "admin"
		},
        "readWrite"
	]});
	EOF