const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.code === "P2025") {
    // 유일성 제약조건에 위배
    const validationErrors = err.meta.target.map((validationErr) => ({
      field: validationErr.property,
      message: Object.values(validationErr.constraints).join(", "),
    }));

    res.status(400).json({
      errorMessage: "입력이 유효하지 않습니다.",
      validationErrors,
    });
  } else {
    res.status(500).json({
      errorMessage: `오류가 발생했습니다. ${err.message || err}`,
    });
  }
};

export default errorHandler;
