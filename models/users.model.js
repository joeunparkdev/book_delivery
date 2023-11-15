const User = (sequelizeInstance, DataTypes) => {
  const model = sequelizeInstance.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: '유효한 이메일 주소를 입력해주세요.',
        },
      },
    },
  });

  // 중복 확인 함수
  model.beforeCreate(async (user, options) => {
    const existingUser = await model.findOne({
      where: { email: user.email.toLowerCase() }, 
    });
  
    if (existingUser) {
      console.error(`중복된 이메일 주소: ${user.email}`);
      throw new Error('이미 사용 중인 이메일 주소입니다.');
    }
  });

  return model;
};

module.exports = (sequelizeInstance, DataTypes) => User(sequelizeInstance, DataTypes);
