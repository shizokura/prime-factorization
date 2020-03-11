import SWorker from 'simple-web-worker';
import { EventBus } from '../event-bus';

export default class Factor
{
    constructor(value)
    {
        this.value = value;
        this.factors = null;
        this.generateFactors();
    }

    async generateFactors()
    {
        if (!this.value)
        {
            EventBus.$emit('prime-number', this.value);
            return;
        }
        else if (this.value === 1) 
        {
            EventBus.$emit('prime-number', this.value);
            return;
        }
        else if (this.value === 2)
        {
            EventBus.$emit('prime-number', this.value);
            return;
        }

        let factors = await SWorker.run((value) => 
        {
            for (let divisor = 2; divisor < value; divisor++)
            {
                if (value % divisor === 0)
                {
                    return [
                        divisor,
                        value / divisor
                    ];
                }
            }
        }, [ this.value ]);
        
        if (factors)
        {
            let [ first, second ] = factors;
            this.factors = [ new Factor(first), new Factor(second) ];
        }
        else
        {
            EventBus.$emit('prime-number', this.value);
        }
    }
}