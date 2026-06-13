package ma.fstt.gestionstation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HistoCarbDTO {

    private Long id;
    private LocalDate date;
    private double prix;
    private String stationNom;
    private String stationVille;
    private String carburantNom;
}