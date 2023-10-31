package entity;

import jakarta.persistence.*;
import lombok.Data;

@Data @Entity @Table(name = "character")
public class Character {
    @Id
    @Column(name="id_character")
    private Long id;
    private String name;
    private String species;
    private String status;
    private String gender;
    private String origin;
    private String image;
}
