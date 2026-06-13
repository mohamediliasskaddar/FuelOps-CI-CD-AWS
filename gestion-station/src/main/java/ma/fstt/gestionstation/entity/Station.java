package ma.fstt.gestionstation.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String ville;
    private String adresse;

    @ManyToMany
    @JoinTable(
            name = "station_carburant",
            joinColumns = @JoinColumn(name="station_id"),
            inverseJoinColumns = @JoinColumn(name="carburant_id")
    )
    @JsonIgnore
    private List<Carburant> carburants= new ArrayList<>();

    //i add this
    @OneToMany(mappedBy = "station")
    @JsonIgnore
    private List<HistoCarb> histoCarbs;
}
