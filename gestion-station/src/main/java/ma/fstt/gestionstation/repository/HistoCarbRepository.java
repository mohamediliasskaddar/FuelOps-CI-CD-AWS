package ma.fstt.gestionstation.repository;

import ma.fstt.gestionstation.entity.HistoCarb;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistoCarbRepository extends JpaRepository<HistoCarb,Long> {
    List<HistoCarb> findByStationIdAndCarburantId(Long stationId, Long carburantId);

}
