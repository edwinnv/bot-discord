import { ButtonStyle, type APIMessageComponentEmoji, type APIButtonComponent } from 'discord-api-types/v10';
import { ComponentBuilder } from '../Component';
/**
 * Represents a button component
 */
export declare class ButtonBuilder extends ComponentBuilder<APIButtonComponent> {
    constructor(data?: Partial<APIButtonComponent>);
    /**
     * Sets the style of this button
     *
     * @param style - The style of the button
     */
    setStyle(style: ButtonStyle): this;
    /**
     * Sets the URL for this button
     *
     * @param url - The URL to open when this button is clicked
     */
    setURL(url: string): this;
    /**
     * Sets the custom id for this button
     *
     * @param customId - The custom id to use for this button
     */
    setCustomId(customId: string): this;
    /**
     * Sets the emoji to display on this button
     *
     * @param emoji - The emoji to display on this button
     */
    setEmoji(emoji: APIMessageComponentEmoji): this;
    /**
     * Sets whether this button is disabled
     *
     * @param disabled - Whether to disable this button
     */
    setDisabled(disabled?: boolean): this;
    /**
     * Sets the label for this button
     *
     * @param label - The label to display on this button
     */
    setLabel(label: string): this;
    toJSON(): APIButtonComponent;
}
//# sourceMappingURL=Button.d.ts.map