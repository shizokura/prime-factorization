import { Notify } from 'quasar';
import Factor from './Factor';
import { EventBus } from '../event-bus';

export default class Tree
{
    constructor()
    {
        this.value = null;
        this.submitted = false;
        this.factor = null;
    }

    submit()
    {
        if (!this.value)
        {
            Notify.create({
                message: 'Please enter a value.',
                color: 'red'
            });
            
            return;
        }

        this.factor = new Factor(this.value);
        this.submitted = true;
        EventBus.$emit("submitted", true);
    }

    back()
    {
        this.submitted = false;
    }
}