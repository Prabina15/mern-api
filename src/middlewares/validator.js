import z, { ZodError } from "zod";

const validate = (Schema) => (req, res, next)=>{

    try {
        Schema.parse(req.body);

        next();
    } catch (error) {
        if (error instanceof ZodError){
            //format zod error

            const formattedError = z.treeifyError(error);

           return  res.status(400).send(formattedError);
        }

        res.status(400).send(error.message);
        
    }
};

export default validate;