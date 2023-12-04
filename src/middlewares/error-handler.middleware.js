const errorHandler = (res, error) => {
    if (error.code === "P2025") {
      // 유일성 제약조건에 위배
      const validationErrors = error.meta.target.map((err) => ({
        field: err.property,
        message: Object.values(err.constraints).join(", "),
      }));
  
      res.status(400).json({
        errorMessage: "입력이 유효하지 않습니다.",
        validationErrors,
      });
    } else {
      res.status(500).json({
        errorMessage: `오류가 발생했습니다. ${error.message || error}`,
      });
    }
  };
  
  export default errorHandler;
  