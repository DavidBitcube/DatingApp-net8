namespace API;

public class CreateMessageDto
{
    public required string RecipientsUsername { get; set; }
    public required string Content { get; set; }
}