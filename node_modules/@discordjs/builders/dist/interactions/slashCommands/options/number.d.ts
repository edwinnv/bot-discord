import { APIApplicationCommandNumberOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandNumericOptionMinMaxValueMixin } from '../mixins/ApplicationCommandNumericOptionMinMaxValueMixin';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
import { ApplicationCommandOptionWithChoicesAndAutocompleteMixin } from '../mixins/ApplicationCommandOptionWithChoicesAndAutocompleteMixin';
export declare class SlashCommandNumberOption extends ApplicationCommandOptionBase implements ApplicationCommandNumericOptionMinMaxValueMixin {
    readonly type: ApplicationCommandOptionType.Number;
    setMaxValue(max: number): this;
    setMinValue(min: number): this;
    toJSON(): APIApplicationCommandNumberOption;
}
export interface SlashCommandNumberOption extends ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesAndAutocompleteMixin<number> {
}
//# sourceMappingURL=number.d.ts.map