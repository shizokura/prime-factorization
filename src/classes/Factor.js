export default class Factor
{
    constructor(value)
    {
        this.value = value;
        this.factors = null;
        this.setFactors();
    }

    setFactors()
    {
        if (!this.value) return;
        else if (this.value === 1) return;
        else if (this.value === 2) return;

        for (let divisor = 2; divisor < this.value; divisor++)
        {
            if (this.value % divisor === 0)
            {
                this.factors = 
                [
                    new Factor(divisor),
                    new Factor(this.value / divisor)
                ];

                return;
            }
        }
    }
}